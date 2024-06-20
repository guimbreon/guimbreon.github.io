function escolherProjetos(projetos){
    const projetosBaralhados = projetos.sort(() => Math.random() - 0.2);

    const projetosEscolhidos = projetosBaralhados.slice(0, 2);
    return projetosEscolhidos;
}


function mostrarProjetos(projetos){
    projetos = escolherProjetos(projetos);
    for (let i = 0; i < listaProjetos.length; i++) {
        let projeto = projetos[i];
        const divPost = document.createElement("div");
        const divPostImg = document.createElement("div");
        const divPostCont = document.createElement("div");
        const where = document.getElementById("here");
        const img = document.createElement("img");
        img.src = projeto.img;
        img.alt = "imagem do projeto " + projeto.nome
        divPostImg.appendChild(img);
        

        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const a = document.createElement("a")

        h2.innerHTML = projeto.nome
        a.innerHTML = "Leia mais"
        a.href = projeto.link
        p.innerHTML = projeto.descricao

        divPost.className = "post";
        divPostImg.className = "post-image";
        divPostCont.className = "post-content";

        divPostCont.appendChild(h2);
        divPostCont.appendChild(p);
        divPostCont.appendChild(a);


        divPost.appendChild(divPostImg);
        divPost.appendChild(divPostCont);
        where.appendChild(divPost);
    }
}


function mostrarProjetos2(projetos){
    for (let i = 0; i < listaProjetos.length; i++) {
        let projeto = projetos[i];
        const divPost = document.createElement("div");
        const divPostImg = document.createElement("div");
        const divPostCont = document.createElement("div");
        const where = document.getElementById("here");
        const img = document.createElement("img");

        divPost.id = projeto.id
        img.src = "../" + projeto.img;
        img.alt = "imagem do projeto " + projeto.nome
        divPostImg.appendChild(img);
        

        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const a = document.createElement("a")

        h2.innerHTML = projeto.nome
        a.innerHTML = "Leia mais"
        a.href = "../" + projeto.link
        p.innerHTML = projeto.descricao

        divPost.className = "post";
        divPostImg.className = "post-image";
        divPostCont.className = "post-content";

        divPostCont.appendChild(h2);
        divPostCont.appendChild(p);
        divPostCont.appendChild(a);


        divPost.appendChild(divPostImg);
        divPost.appendChild(divPostCont);
        where.appendChild(divPost);
    }
}