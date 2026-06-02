function Pronouns() {
    let pronouns1 = ["He","She","They"]
    let pronouns2 = ["Her","Them"]
    
    
    let randomIndex = Math.floor(Math.random()*3)
    let pronoun1 = pronouns1[randomIndex]
    
    let pronoun2 = "The NULL Pronoun"
    if (randomIndex != 0) {
        pronouns1[randomIndex] = pronouns2[randomIndex-1]
        pronoun2 = pronouns1[Math.floor(Math.random()*3)]
    } else {
        pronoun2 = pronouns1[1+Math.floor(Math.random()*2)]
    }
    
    pronouns.innerHTML = `My Pronouns are ${pronoun1}/${pronoun2}`
    setTimeout(Pronouns,500)
}

function gayMode() {
    epilepsyWarning.innerHTML = "Epilepsy Warning!!!";
    setTimeout(()=>{
        pronounBody.classList.add("gay");
        epilepsyWarning.innerHTML = "";
    }, 5000)
}

Pronouns()