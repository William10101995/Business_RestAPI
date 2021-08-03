import { RequestHandler } from "express";
import Usuario from "../database/database.users.schema";
import Table from "../database/database.table.schema";

//Obtener Mesas
export const getTableUser: RequestHandler = async (req, res) => {
  try {
    const tables = await Table.find().populate({
      path: "users",
      model: "Usuario",
    });
    res.status(200).json(tables);
    console.log(tables);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Algo ha ocurrio, vuelve a intentarlo luego" });
  }
};

//Crear una nueva mesa
export const createTable: RequestHandler = async (req, res) => {
  const tableboolean = await Table.findOne({
    numberTable: req.body.numberTable,
  });
  console.log(tableboolean);
  if (tableboolean) {
    res.status(400).json({ message: "La Mesa ya exite, intente otro numero" });
  } else {
    const newTable = new Table(req.body);
    const table = await newTable.save();
    res.status(200).json(table);
  }
};

//Borrar usuario de mesa
export const deleteUserTable: RequestHandler = async (req, res) => {
  const tableID = req.query.tableID;
  const userID = req.query.userID;
  const tableUpdate = await Table.findOne({
    users: { $in: userID },
    _id: tableID,
  });
  if (tableUpdate) {
    tableUpdate.users.pull(userID);
    tableUpdate.save();
    res.status(200).json(tableUpdate);
  } else {
    res.status(400).json({ message: "El usuario o la mesa no existe" });
  }
};

//Borrar una mesa
export const deleteTable: RequestHandler = (req, res) => {
  res.send("Mesa Borrada");
};

//Obtener Usuarios
export const getUsersTables: RequestHandler = async (req, res) => {
  try {
    const users = await Usuario.find({}).populate("table");
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Algo ha ocurrio, vuelve a intentarlo luego" });
  }
};

//Agregar usuario a mesa
export const createUserTable: RequestHandler = async (req, res) => {
  const tableId = req.query.tableID;
  const table = await Table.findById(tableId);
  if (!table) {
    res.status(400).json({ message: "La mesa no existe!" });
  } else {
    const userExist = await Usuario.findOne({
      dni: req.body.dni,
    });

    if (!userExist) {
      try {
        const newUser = new Usuario(req.body);
        newUser.table = table;
        await newUser.save();
        table.users.push(newUser);
        await table.save();
        res.status(200).json(table);
      } catch (error) {
        res.status(400).json(error.message);
      }
    } else {
      const tableUser = await Table.findOne({
        users: { $in: userExist._id },
        _id: tableId,
      });

      if (tableUser) {
        res
          .status(400)
          .json({ message: `${userExist.firstName} ya esta en la mesa!` });
      } else {
        userExist.table = table;
        table.users.push(userExist);
        await table.save();
        res.status(200).json(table);
      }
    }
  }
};
