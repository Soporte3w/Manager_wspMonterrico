<<<<<<< HEAD
const instance=[{
    "idSendmessage": 89370,
    "tenvio": "51927793219",
    "nevio": "",
    "campania": "Invitación escuelita Yego",
    "titulo": "Invitación escuelita Yego",
    "mensaje": "Buenos días, Conductores de Yego, Hoy comenzamos con la Escuelita YEGO a las 11:00 am te invitamos a conectarte y poder aprender más sobre los bonos. Estamos en TikTok nuevamente como yego.live 🎯 ÚNETE para ayudarnos a alcanzar 3k de seguidores 👉 https://acortar.link/Adm3Kv. y así podrás tener nuestra atención personalizada a través del Live.\n¡Vamos juntos por la meta! 🚗💡",
    "tipo": "texto",
    "media": ""
}]

const sendMessage=(instance)=>{
    let tipoValue=''
    if(instance.tipo=="texto"){
        tipoValue="sendText"
    }else{
        tipoValue='sendMedia'
    }
    console.log(tipoValue)
}
sendMessage(instance)
=======
function sendDocument(messageData) {
    const data = {
      number: messageData.number,
      mediatype: "document",
      mimetype: "application/pdf",
      media: messageData.media, // URL del PDF
      fileName: messageData.fileName,
      caption: messageData.caption
    };
  
    const options = {
      method: 'POST',
      headers: {
        'apikey': 'C83E5B8C0F0A-48EA-9CF2-027ED2679B4C', // Tu API Key
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch('https://apievo.3w.pe/message/sendMedia/Avisos-02', options)
      .then(response => response.json())
      .then(responseData => {
        console.log('Respuesta del servidor:', responseData);
      })
      .catch(error => {
        console.error('Error al enviar el documento:', error);
      });
  }
  
  // Ejemplo de uso de la función
  const messageData = {
    number: "51916628409",  // Número de teléfono
    media: "https://cdn.3w.pe/masivo/82a0dcea-54bd-49e5-bb5b-83ca88a3a9dd-WebSocket.pdf",  // URL del PDF
    fileName: "documento.pdf",  // Nombre del archivo
    caption: "Este es un documento PDF enviado."  // Descripción del archivo
  };
  
  // Llamada a la función
  sendDocument(messageData);
  
>>>>>>> e3428083c120cb30a47b0d3a18315c76ef9aa7ee
