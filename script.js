function abrirmodal(foto){
    const modal = document.getElementById('janelamodal');
    const imagem = document.getElementById('imagem');
    const fotoaqui = document.getElementById(foto);
    modal.classList.add('abrir')
    imagem.src = fotoaqui.src

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janelamodal'){
        modal.classList.remove('abrir');
        }
    })
}

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function aumentotitulo(){
    const titulo = document.getElementById('titulo');
    titulo.classList.toggle('tituloaumentado');
}