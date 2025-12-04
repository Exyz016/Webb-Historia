function switchTab(tab) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab));
    document.querySelectorAll('.webb-container').forEach(webb => webb.classList.toggle('active', webb.id === `${tab}-webb`));
}

const techContent = {
    html: {
        title: 'HTML - HyperText Markup Language',
        content: `HTML är webbens grundläggande byggsten. Det är ett märkspråk som används för att strukturera innehåll på webbsidor. Med HTML definierar vi rubriker, paragrafer, bilder, länkar och alla andra element som finns på en webbsida. Tänk på HTML som husets stomme - det ger strukturen men inte utseendet.
                
                HTML använder taggar för att definiera olika typer av innehåll. Till exempel används &lt;h1&gt; för den viktigaste rubriken, &lt;p&gt; för paragrafer, och &lt;img&gt; för bilder. Varje HTML-dokument följer en hierarkisk struktur som börjar med &lt;html&gt;-taggen och innehåller en &lt;head&gt; för metadata och en &lt;body&gt; för det synliga innehållet.
                
                Semantisk HTML, där taggarna beskriver betydelsen av innehållet (som &lt;article&gt;, &lt;nav&gt;, &lt;footer&gt;), gör webbsidor mer tillgängliga för skärmläsare och sökmotorer. HTML har utvecklats genom åren, och HTML5, den senaste versionen, introducerade många nya funktioner som stöd för video, audio och canvas för grafik.`
    },
    css: {
        title: 'CSS - Cascading Style Sheets',
        content: `CSS är det språk som ger webben dess utseende och stil. Medan HTML ger strukturen, bestämmer CSS färger, typsnitt, layouter och animationer. CSS gör det möjligt att skapa vackra och responsiva webbsidor som fungerar på alla enheter. Det är som husets målning och inredning.
                
                Med CSS kan du styra varje detalj av hur din webbsida ser ut. Du kan ändra textfärger, bakgrunder, marginaler, padding, positionering och mycket mer. CSS använder selektorer för att välja vilka HTML-element som ska stylas och deklarationer för att definiera hur de ska se ut.
                
                Moderna CSS-funktioner som Flexbox och Grid Layout har revolutionerat hur vi bygger layouter på webben. Responsiv design med media queries gör det möjligt att anpassa designen efter skärmstorlek. CSS-animationer och transitions skapar flytande, interaktiva användarupplevelser utan att behöva JavaScript.`
    },
    javascript: {
        title: 'JavaScript',
        content: `JavaScript är programmeringsspråket som gör webbsidor interaktiva och dynamiska. Med JavaScript kan webbsidor reagera på användarens handlingar, hämta ny data utan att ladda om sidan, validera formulär och skapa komplexa webbapplikationer. Det är hjärnan som får allt att fungera tillsammans.
                
                JavaScript körs direkt i webbläsaren och kan manipulera HTML och CSS i realtid. Det kan svara på händelser som klick, tangentbordsinmatning och musrörelser. Modern JavaScript (ES6 och senare) har introducerat kraftfulla funktioner som arrow functions, promises för asynkron programmering, och moduler för bättre kodorganisation.
                
                JavaScript-ramverk och bibliotek som React, Vue och Angular har gjort det enklare att bygga stora, komplexa webbapplikationer. Node.js har gjort det möjligt att använda JavaScript även på serversidan, vilket skapat en helhetslösning där samma språk kan användas både i frontend och backend.`
    }
};

function openModal(tech) {
    const modal = document.getElementById('techModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = techContent[tech].title;
    modalBody.innerHTML = techContent[tech].content.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('techModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(event) {
    if (event.target.id === 'techModal') {
        closeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});