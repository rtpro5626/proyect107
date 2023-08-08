
function comenzar_clasificacion()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.suondClassifier("https://teachablemachine.withgoogle.com/models/aSkMy9u2u/",modelo_cargado)
    
}
function modelo_cargado()
{
    classifier.classify(gotresult)
}
function gotresult()
{
console.log("resultado")
}