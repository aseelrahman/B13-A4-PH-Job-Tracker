function showOnly(id){
    const jobs = document.getElementById('jobs');
    const interview = document.getElementById('interview');
    const rejected = document.getElementById('rejected');

    jobs.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");


    document.getElementById(id).classList.remove("hidden");

    btnActive();
}

function btnActive(){
    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('btn-interview');
    const btnRejected = document.getElementById('btn-rejected');

    btnAll.addEventListener('click', function(){
        btnAll.style.backgroundColor = `#3B82F6`
        btnAll.style.color = `#ffffff`
        btnInterview.style.backgroundColor = `#ffffff`
        btnInterview.style.color = `#64748B`
        btnRejected.style.backgroundColor = `#ffffff`
        btnRejected.style.color = `#64748B`
    })
    btnInterview.addEventListener('click', function(){
        btnInterview.style.backgroundColor = `#3B82F6`
        btnInterview.style.color = `#ffffff`
        btnAll.style.backgroundColor = `#ffffff`
        btnAll.style.color = `#64748B`
        btnRejected.style.backgroundColor = `#ffffff`
        btnRejected.style.color = `#64748B`
    })
    btnRejected.addEventListener('click', function(){
        btnAll.style.backgroundColor = `#ffffff`
        btnAll.style.color = `#64748B`
        btnInterview.style.backgroundColor = `#ffffff`
        btnInterview.style.color = `#64748B`
        btnRejected.style.backgroundColor = `#3B82F6`
        btnRejected.style.color = `#ffffff`
    })
}