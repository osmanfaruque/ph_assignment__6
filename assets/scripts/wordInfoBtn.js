// Create a namespace object for modal functions
const wordInfoModal = {
    infoModal: () => {
        const modal = document.getElementById('wordInfoModal');
        if (modal) {
            modal.showModal(); // Use the showModal() method for dialog elements
        }
    }
};
const wordInfo = (id) => {
    const wordInfoAPI = `https://openapi.programming-hero.com/api/word/${id}`
    // fetching the data
    fetch(wordInfoAPI)
        // convert the promise to json
        .then(res => res.json())
        //Pass the Data to processing function
        .then(data => displayWordInfo(data.data));

    //function to Process the Data
    function displayWordInfo(data) {
        // catch the container to input the vocab list into
        const wordInfoModalContainer = document.getElementById('wordInfoModal');
        // clear the previous content
        wordInfoModalContainer.innerHTML = '';
        // Create synonyms HTML if they exist
        let synonymsHTML = 'No synonyms available';
        if (data.synonyms && data.synonyms.length > 0) {
            synonymsHTML = data.synonyms.map(syn =>
                `<kbd class="kbd kbd-lg rounded-md border-box bg-[#EDF7FF]">${syn}</kbd>`
            ).join('');
        }
        //input new Data
        wordInfoModalContainer.innerHTML =
            `
        <div class="modal-box rounded-3xl">
        <div class="box-border border-2 border-[#EDF7FF] flex flex-col items-start p-6 gap-8 rounded-3xl">
        <h1 class="text-3xl font-semibold pb-3">${data.word || 'Unknown'} (<a href=""><i class="fa-solid fa-microphone fa-lg"></i></a>:${data.pronunciation || 'N/A'})</h1>
        <div>
            <h1 class="text-2xl font-semibold pb-3">Meaning</h1>
            <p class="text-2xl font-medium font-bangla pb-3">${data.meaning || 'No meaning available'}</p>
        </div>
        <div>
            <h1 class="text-2xl font-semibold pb-3">Example</h1>
            <p class="pb-3">${data.sentence || 'No example available'}</p>
        </div>
        <div  id="synonym_container">
            <h1 class="text-2xl font-medium pb-3">সমার্থক শব্দ গুলো</h1>
            <span id="synonym" class="flex gap-2 pb-3">${synonymsHTML}</span>
        </div>
    </div>
    <div class="flex items-start justify-start pt-8">
        <form method="dialog">
            <button class="btn font-bangla text-[#422AD5] outline-1 outline-[#422AD5]  hover:text-[white] hover:bg-[#422AD5] rounded-3xl">Complete Learning</button>
        </form>
    </div>
    `
    }
};
displayWordInfo();
