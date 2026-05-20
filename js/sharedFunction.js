function showOnly(id){
    
    let count = 0;
    const cards = document.getElementsByClassName('job-card');

    for(const card of cards){
        if(card.dataset.status === id || id === 'all'){
            count++;
            card.classList.remove('hidden');
        }
        else{
            card.classList.add('hidden');
        }
    }
    if(count === 0){
        document.getElementById('empty').classList.remove('hidden')
    }
    else{
        document.getElementById('empty').classList.add('hidden')
    }

}

function btnActive(btn){
    currentTab = btn;
    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('btn-interview');
    const btnRejected = document.getElementById('btn-rejected');
    

    btnAll.className = "w-20 h-8 rounded-lg bg-white text-[#64748B]";
    btnInterview.className = "w-20 h-8 rounded-lg bg-white text-[#64748B]";
    btnRejected.className = "w-20 h-8 rounded-lg bg-white text-[#64748B]";

    if(btn == 'all'){
        btnAll.className = "w-20 h-8 rounded-lg bg-[#3B82F6] text-white";
        document.getElementById('select-count').classList.add("hidden")
    }

    if(btn == 'interview'){
        btnInterview.className = "w-20 h-8 rounded-lg bg-[#3B82F6] text-white";
    }

    if(btn == 'rejected'){
        btnRejected.className = "w-20 h-8 rounded-lg bg-[#3B82F6] text-white";
    }

    count();
}

function deleteBtn(button){
    button.parentNode.parentNode.remove()

    jobCount();
    statusList();
    count();
    
}

function count(){
    const count = document.getElementById('select-count');

    const interviewList = document.querySelectorAll('[data-status="interview"]')

    const rejectList = document.querySelectorAll('[data-status="rejected"]')
    

    if(currentTab == 'all'){
        count.classList.add("hidden");
    }
    if(currentTab =='interview'){
        count.innerText = `${interviewList.length} of `
        count.classList.remove("hidden");
    }
    if(currentTab == 'rejected'){
        count.innerText = `${rejectList.length} of `
        count.classList.remove("hidden");
    }
}