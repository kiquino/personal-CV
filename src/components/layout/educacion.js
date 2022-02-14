import React from "react";
import StudyCard from "../individuals/study-card";

const Educacion = () => {



    let terminado = {backgroundColor: '#aded83'};
    let enProceso = {backgroundColor: '#EBBD23'};

    let arrayStudy =[
        {
            title: 'Tecnicatura en Programación',
            description: 'Tecnicatura de Teclab de 2 años',
            img: 'logo-blanco.svg',
            status: enProceso,
            dateBegin: '01/08/2021',
            dateEnd: '----------------'
        },
      {
            title: 'Fullstack Developer',
            description: 'Curso de Fullstack Developer de 3 meses UTN con tecnología React Js, y Node Js',
            img: 'utn.png',
            status: terminado,
            dateBegin: '01/05/2021',
            dateEnd: '30/08/2021'
        },
        {
            title: 'Front-end Developer',
            description: 'Curso completo de Front-end Developer de 1 año en Educación IT',
            img: 'logo-it.svg',
            status: terminado,
            dateBegin: '15/03/2017',
            dateEnd: '12/11/2018'
        }, {
            title: 'Java Developer',
            description: 'Curso de Java Developer de 1 año en el programa Codo a Codo del Gobierno de la ciudad',
            img: 'logoBA.jpeg',
            status: terminado,
            dateBegin: '04/04/2019',
            dateEnd: '30/12/2019'
        },
        {
            title: 'Fullstack Developer',
            description: 'Curso de Fullstack Developer de medio año en el programa Codo a Codo del Gobierno de la ciudad',
            img: 'logoBA.jpeg',
            status: terminado,
            dateBegin: '04/06/2020',
            dateEnd: '30/12/2020'
        }, {
            title: 'Diseñador Multimedial',
            description: 'Carrera de Diseño Multimedial de 3 años en Escuela Davinci',
            img: 'logo-davinci-blanco.svg',
            status: terminado,
            dateBegin: '10/03/2010',
            dateEnd: '10/03/2013'
        }
        
        
        

    ]



    return (<div className="container-education">
        <h2 className="educacion__title">Educación</h2>
        <div className="studies">
            {arrayStudy.map((study, index) => {
                return <StudyCard key={index} {...study}/>
            })}
           
        </div>
    </div>)
}
export default Educacion;