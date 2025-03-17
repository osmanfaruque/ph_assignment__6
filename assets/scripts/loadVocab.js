const loadVocab = (id) => {
    // Catch the container to input the vocab list into
    const vocabContainer = document.getElementById('vocab-container');

    // Show a loading spinner
    vocabContainer.innerHTML =
        ` <div></div><div class="flex flex-col items-center "><span class="loading loading-dots loading-xl"></span></div><div></div>`;
    // fetching the data
    const vocabListAPI = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(vocabListAPI)
        // convert the promise to json
        .then(res => res.json())
        //Pass the Data to processing function
        .then(data => displayVocab(data.data))
    //Function to Process the Data
    function displayVocab(data) {
        //catch the array of object
        const dataArray = data;
        // catch the container to input the vocab list into
        const vocabContainer = document.getElementById('vocab-container');
        // clear the previous content
        vocabContainer.innerHTML = '';
        //run Loop on all the array of object
        if (dataArray.length === 0) {
            vocabContainer.innerHTML = `
            <div></div>
            <div class="flex flex-col justify-center items-center text-center gap-6">
                <img src="assets/images/alert-error.png" alt="Alert Error image">
                <h1 class="font-bangla text-sm text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h1>
                <h1 class="text-3xl font-medium text-[#292524]">নেক্সট Lesson এ যান</h1>
            </div>
            <div></div>
            `;
        }
        else {
            dataArray.forEach(object => {
                //create the element
                const vocabCard = document.createElement('div');
                //add class to the div
                vocabCard.classList.add('p-14', 'bg-white', 'flex', 'flex-col', 'gap-14', 'rounded-xl');
                //input the data
                vocabCard.innerHTML = `
                <div class="flex flex-col text-center gap-6">
                    <h1 class="font-inter text-3xl font-bold">${object.word}</h1>
                    <p class="text-xl font-medium">Meaning/Pronunciation</p>
                    <h1 class="font-bangla text-3xl font-semibold text-[#18181b46]">"${object.meaning} / ${object.pronunciation}"</h1>
                </div>
                <div class="flex justify-between gap-14">
                    <button onclick="wordInfoModal.infoModal();wordInfo(${object.id});" class="btn bg-[#1A91FF1A] hover:bg-[#3f84c49d]"><i class="fa-solid fa-circle-info fa-xl"></i></button>
                    <button onclick="wordPronounce($${object.id})" class="btn bg-[#1A91FF1A] hover:bg-[#3f84c49d]"><i class="fa-solid fa-volume-high fa-xl"></i></button>
                </div>`;
                //append the element
                vocabContainer.appendChild(vocabCard);
            });
        }
    }
}
