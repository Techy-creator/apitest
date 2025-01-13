(function () {
    // Configuration (editable on your server)
    const botConfig = {
        botId: "cm2g51wzj2i0kn8bkqdvvnyx9", // Bot ID
        backendUrl: "https://your-backend-url.com", // Your chatbot backend
        iconUrl: "./village canopy_logo.png", // Chat icon URL
        popupTitle: "College Assistant", // Popup Title
        iframeUrl: "https://web-chat-app-ebon.vercel.app/", // Chatbot iframe
        styles: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            backgroundColor: "#007bff",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
        },
    };

    // Add the chatbot icon to the page
    const chatIcon = document.createElement("div");
    Object.assign(chatIcon.style, botConfig.styles);
    chatIcon.style.backgroundImage = `url('${botConfig.iconUrl}')`;
    chatIcon.style.backgroundSize = "cover";
    chatIcon.style.backgroundPosition = "center";
    document.body.appendChild(chatIcon);

    // Handle chatbot popup
    chatIcon.addEventListener("click", function () {
        let popupContainer = document.getElementById("chat-popup");
        if (!popupContainer) {
            // Create the popup if it doesn't exist
            popupContainer = document.createElement("div");
            popupContainer.id = "chat-popup";
            popupContainer.style.position = "fixed";
            popupContainer.style.top = "10%";
            popupContainer.style.left = "10%";
            popupContainer.style.width = "80%";
            popupContainer.style.height = "80%";
            popupContainer.style.zIndex = "1000";
            popupContainer.style.backgroundColor = "#fff";
            popupContainer.style.borderRadius = "10px";
            popupContainer.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            popupContainer.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color:rgba(0, 123, 255, 0); color: white; border-radius: 10px 10px 0 0;">
                    <h4 style="margin: 0;">${botConfig.popupTitle}</h4>
                    <button id="close-chat" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer;">&times;</button>
                </div>
                <iframe src="${botConfig.iframeUrl}" style="width: 100%; height: calc(100% - 40px); border: none;"></iframe>
            `;
            document.body.appendChild(popupContainer);

            // Close button logic
            document.getElementById("close-chat").addEventListener("click", function () {
                document.body.removeChild(popupContainer);
            });
        }
    });
})();
