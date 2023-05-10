if (/Android|iPhone/i.test(navigator.userAgent)) {
    alert("This webpage is not optimised for Mobile. Please open via desktop for the best experience.")

    // Changing Services section to be vertical
    let card = document.querySelectorAll('.cards-row');
    for(let el of card){
        el.style.gridTemplateColumns = "1fr";
    }

    // Changing enquire section to be vertical
    card = document.querySelectorAll('.enquire-container');
    for(let el of card){
        el.style.gridTemplateColumns = "1fr";
    }

    // Changing Benefits to be vertical
    card = document.querySelectorAll('.points-container');
    for(let el of card){
        el.style.gridTemplateColumns = "1fr";
    }
}