// const btna = document.getElementById("testx");

// btna.addEventListener("click", () => {
//     console.log("hi");
// });
const ipc = require("electron").ipcRenderer;
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("testx").addEventListener("click", () => {
        console.log("hi");
        ipc.send("close-app");
    });

    document.getElementById('minimize').addEventListener("click", () => {
        ipc.send("minimize");
    });



    isOnline(navigator.onLine);

    window.addEventListener("offline", () => {
        isOnline(false);
    });
    window.addEventListener("online", () => {
        isOnline(true);
    });
});

function isOnline(status) {
    const st = document.getElementById('status')
    document.getElementById("online").innerHTML = status ? "Todo" : " Todo - offline";
    status ? st.classList.remove('offline') : st.classList.add('offline')
}
