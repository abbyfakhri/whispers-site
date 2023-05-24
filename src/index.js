const form = document.getElementById('textInput')
const submitBtn = document.getElementById('sendBtn')
const keyForm = document.getElementById('keyInput')

const data1 = "this is a message"
const key1 = "secret"

console.log("encrypted =",xorCipher(data1,key1))
console.log("decrypted =",xorCipher(xorCipher(data1,key1),key1))




submitBtn.addEventListener('click',() =>{
    const data = form.value
    const keyData = keyForm.value
     console.log('text data:',data)
     console.log('key data:',keyData)

    const encrypted = xorCipher(data,keyData)
    console.log('encrypted:',stringToBinary(encrypted))

    send(stringToBinary(encrypted))

    form.value = ""
    keyForm.value = ""
})

const send = async (message) => {
    return await sendDataToServer(message)
}

const sendDataToServer = (message)=>{
    return new Promise (resolve =>{
        $.ajax({
            type: "POST",
            "headers": {

                "Access-Control-Allow-Origin":"*",                
                "Access-Control-Allow-Headers": "*",
            },
            contentType: 'application/x-www-form-urlencoded',

            crossDomain: true, // Allow cross-origin requests
            xhrFields: {
                withCredentials: true // Send cookies and basic authentication information
            },
            url: "http://localhost:3000/message",
            
            data: { 
            
                messageData:message 
            
            },

            success: function(data) {
              // Handle the response data
              resolve(data);
            },

            error:(err)=>{
                console.log(err);
            }
          });
    })
}