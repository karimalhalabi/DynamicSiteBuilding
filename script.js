const appcontainer = document.getElementById("appcontainer")
const getData = async () => {
    const req = await fetch("./blog.json").then(response => response.json())
        .then(data => {
            articles = data.articles
            console.log("art:", articles)
            processLinks();
            processArticles(articles)
            // processFooter()
        })
        .catch(error => {
            console.log("Error: ", error)
        }).finally(() => {
            console.log("Finally...")
            processFooter()

        })
};

const processLinks = () => {
    
}


const processFooter = () => {
    const myfooter = document.createElement("footer");
    myfooter.innerHTML = "&copy; Basel Aljundi"
    appcontainer.append(myfooter)
}

const processArticles = (arts) => {
    arts.forEach(art => {
        console.log("inFor", art)
        appcontainer.append(processArticle(art))
    });

}

const processArticle = (art) => {
    const myart = document.createElement("article");
    myart.setAttribute("id", art.id)
    const myartheader = document.createElement("h1");
    myartheader.innerText = art.title
    myartheader.classList.add("articleheader")
    myart.append(myartheader);
    const myartbody = document.createElement("section");
    myartbody.classList.add("articlebody")
    myart.append(myartbody);
    const figures = art.figures;
    processFigures(myartbody, figures);
    return myart
}

const processFigures = (myart, figures) => {
    figures.forEach((fig, index) => {
        console.log("inForFig", fig)
        myart.append(processFigur(fig, index))
    });
}

const processFigur = (fig, index) => {
    const myfig = document.createElement("figure");
    myfig.classList.add(`s${index}`)

    // creating figure header
    const myfigheader = document.createElement("h2");
    myfigheader.innerText = fig.figuretitle

    // creating figure image
    const myfigimg = document.createElement("img");
    myfigimg.setAttribute("src", fig.picturefile);

    // creating image caption
    const mycaption = document.createElement("caption");
    mycaption.innerText = fig.caption;

    // creating image and caption container
    const myimgcontainer = document.createElement("div");

    myimgcontainer.append(myfigimg);
    myimgcontainer.append(mycaption);


    // creating figure contents
    const myfigparagraph = document.createElement("p");
    myfigparagraph.setAttribute("title", fig.content)
    myfigparagraph.innerText = fig.content;

    // appending elements
    myfig.append(myfigheader);
    myfig.append(myimgcontainer)
    myfig.append(myfigparagraph);
    return myfig
}
getData();
