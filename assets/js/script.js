const input = document.getElementById("input")
const btn = document.getElementById("btnAgregar")
const total = document.getElementById("total")
const realizadas = document.getElementById("realizadas")
// incresar en la lista el html
let lista = document.querySelector(".lista")
let id = 0
const nuevasTareas = []

function renderTareas (array) {
    total.innerHTML = nuevasTareas.length
    let contadorR = 0
    let template = "";
    for (let tarea of nuevasTareas){
        template += `
        <tr>
            <td ${tarea.estado ? 'style=opacity:.3' : ''}>
                ${tarea.id}
            </td>
            <td ${tarea.estado ? 'style=opacity:.3' : ''}>
                ${tarea.tarea}
            </td>
            <td ${tarea.estado ? 'style=opacity:.3' : ''}>
                <input type="checkbox" onclick="cambiarEstado(${tarea.id})" ${tarea.estado ? 'checked' : ''}>
            </td>
            <td ${tarea.estado ? '' : 'style=opacity:.3'}>
                <button id="eliminar" type="button" onclick="borrar(${tarea.id})" class="btn btn-sm btn-danger" ${tarea.estado ? '' :'disabled'} >x</button>
            </td>
        </tr>
        `;
        if(tarea.estado){contadorR++}
    }

    realizadas.innerHTML = contadorR
    lista.innerHTML = template;
}



btn.addEventListener("click", ()=>{
    const tareas = input.value
    id++
    const objetoTarea = {id:id, tarea: tareas, estado: false}
    nuevasTareas.push(objetoTarea)
    renderTareas()
    input.value = ""

    console.log( nuevasTareas)
})

function borrar (id){
    
    const index = nuevasTareas.findIndex((ele) => ele.id === id)
    nuevasTareas.splice(index,1)
    
    renderTareas()
    console.log( nuevasTareas)
}

const cambiarEstado = (id) =>{
    nuevasTareas.map ((ele) =>{
        if (ele.id === id) ele.estado = !ele.estado
    })
    renderTareas(nuevasTareas)
    console.log( nuevasTareas)
}

