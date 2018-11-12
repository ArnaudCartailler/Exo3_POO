function Cards(title, accro, summary) {
    this.title = title;
    this.accro = accro;
    this.summary = summary;
}

function addCard() {
    let titles = document.getElementById('title').value;
    let accroches = document.getElementById('accro').value;
    let summary = document.getElementById('summary').value;
    newObject = new Cards(titles, accroches, summary);
    document.getElementById('title').value = "";
    document.getElementById('accro').value = "";
    document.getElementById('summary').value = "";

    let htmlManager = {
        parentElement: document.getElementById('viewCard'),
        card: [newObject],
        createHTMLElement: function (element, title, accro, summary, parentElement) {
            if (title !== "" && accro !== "" && summary !== "") {
                let childElement = document.createElement(element);
                childElement.className = "col-5 m-0 p-0 mx-auto mt-2";
                parentElement.appendChild(childElement);

                let titleElement = document.createElement(element);
                titleElement.className = "col-12 m-0 p-0 text-center title";
                titleElement.innerHTML = title;
                childElement.appendChild(titleElement);

                let accrocheElement = document.createElement(element);
                accrocheElement.className = "col-12 m-0 p-0 text-left accro";
                accrocheElement.innerHTML = accro;
                childElement.appendChild(accrocheElement);

                let descriptionElement = document.createElement(element);
                descriptionElement.className = "col-12 m-0 p-0 text-left desc";
                descriptionElement.innerHTML = summary;
                childElement.appendChild(descriptionElement);
            }
        },
        displayCard: function (array) {
            let that = this;
            array.forEach(function (card) {
                that.createHTMLElement('div', card.title, card.accro, card.summary, that.parentElement);
            })
        },
    }
    htmlManager.displayCard(htmlManager.card);
}