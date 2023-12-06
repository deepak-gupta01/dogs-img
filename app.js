let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    let a = document.querySelector("a");
    img.setAttribute("src", link);
    a.setAttribute("href", link);
});

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (e) {
        return "/";
    }
}
