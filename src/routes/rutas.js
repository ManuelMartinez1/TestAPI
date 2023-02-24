const {Router}=require('express');
const router=Router();

//RECETAS
    const recetas = require('./data.json');
    const clientes = require('./cliente.json');
    //GETS
    router.get('/recetas',(req,res)=>{
        res.json(recetas);
    });

    router.get('/recetas/:id',(req,res)=>{
        const {id} = req.params;
        recetas.forEach(receta => {
            if(receta.id == id)
                res.json(receta);
        });
    });

    //entradas
        router.get('/recetas/entradas',(req,res)=>{
            recetas.forEach(receta=>{
                if(receta.tipo == "entrada")
                    res.json(receta);
            });
        });

        router.get('/recetas/entradas/:id/ingredientes',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.ingredientes);
            });
        });

        router.get('/recetas/entradas/:id/status',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.status);
            });
        });



    //comidasfuertes
        router.get('/recetas/comidasfuertes',(req,res)=>{
            recetas.forEach(receta=>{
                if(receta.tipo == "comidafuerte")
                    res.json(receta);
            });
        });

        router.get('/recetas/comidasfuertes/:id/ingredientes',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.ingredientes);
            });
        });

        router.get('/recetas/comidasfuertes/:id/status',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.status);
            });
        });


    //bebidas
        router.get('/recetas/bebidas',(req,res)=>{
            recetas.forEach(receta=>{
                if(receta.tipo == "bebidas")
                    res.json(receta);
            });
        });

        router.get('/recetas/bebidas/:id/ingredientes',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.ingredientes);
            });
        });

        router.get('/recetas/bebidas/:id/status',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.status);
            });
        });

    //postres
        router.get('/recetas/postres',(req,res)=>{
            recetas.forEach(receta=>{
                if(receta.tipo == "postre")
                    res.json(receta);
            });
        });

        router.get('/recetas/postres/:id/ingredientes',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.ingredientes);
            });
        });

        router.get('/recetas/postres/:id/status',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.status);
            });
        });


    //desayunos
        router.get('/recetas/desayunos',(req,res)=>{
            recetas.forEach(receta=>{
                if(receta.tipo == "desayuno")
                    res.json(receta);
            });
        });

        router.get('/recetas/desayunos/:id/ingredientes',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.ingredientes);
            });
        });

        router.get('/recetas/desayunos/:id/status',(req,res)=>{
            const {id} = req.params;
            recetas.forEach(receta => {
                if(receta.id == id)
                    res.json(receta.status);
            });
        });
    //POSTS
        router.post('/recetas/nuevareceta',(req,res)=>{
            const {id,nombre,ingredientes,status,tipo,cantidad,precios}= (req.body);
            if(id&&nombre&&ingredientes&&status&&tipo&&cantidad&&precios){
                const id = recetas.length +1;
                const newReceta = {...req.body,id};
                recetas.push(newReceta);
                res.send(recetas);
            }
            else
                res.status(500).json({"error":"no data"});
        });

    //PUTS

    //DELETES

        router.delete('/recetas/:id/eliminar',(req,res)=>{
            const{id} = req.params;
                for(let i=0 ;i<recetas.length;i++){
                    if(recetas[i].id==id){
                    recetas.splice(i,id);
                    res.send(recetas);
                    }
                }
        });

//CUENTA
    //GETS
        router.get('/cuenta/:id/orden',(req,res)=>{
         const{id} = req.params;
            clientes.forEach(cliente=> {
             if(cliente.id == id)
            res.json(cliente.orden);
         });
    });
    //POST
        router.post('/cuenta/:id/agregar/orden', (req,res)=>{
            const {nombre,precio} = (req.body);
            const {id} = req.params;
            clientes.forEach(cliente =>{
                if(cliente.id==id && nombre && precio){
                    const newOrden = {...req.body}
                    cliente.orden.push(newOrden);
                    res.json(cliente.orden);
                }
            });
        });
    //PUT
  //      router.put('/cuenta/:id/modificar/orden',(req,res)=>{
           
   //     });
//DELETE
        router.delete('/cuenta/:id/eliminar',(req,res)=>{
            const{id} = req.params;
            for(let i=0 ;i<clientes.length;i++){
                if(clientes[i].id==id){
                    clientes.splice(i,id);
                    res.send(clientes);
                }
            }
        });
//MENU DEL DIA

const menudeldia = require('./data2.json');
    //GETS
     router.get('/menudeldia',(req,res)=>{
         res.json(menudeldia);
     });
    //PUTS

    //POSTS
     router.post('/menudeldia/nuevomenu',(req,res)=>{
         const {desayuno,comida,postre,entrada,bebida}= (req.body);
         if(desayuno && comida && postre && entrada && bebida){
             const id = menudeldia.length +1;
             const newMenu = {...req.body,id};
             menudeldia.push(newMenu);
             res.send(menudeldia);
         }
         else
             res.status(500).json({"error":"no data"});
     });
     router.delete('/menudeldia/:id/eliminar',(req,res)=>{
        const{id} = req.params;
        for(let i=0 ;i<menudeldia.length;i++){
            if(menudeldia[i].id==id){
                menudeldia.splice(i,id);
                res.send(menudeldia);
            }
        }
    });
module.exports = router;


module.exports = router;