import app from './app'



//Starting
app.listen(app.get('port'), ()=>{
    console.log('Server on port: ', app.get('port'))
})