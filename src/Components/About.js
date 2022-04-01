import React from 'react'


export default function About(props) {

    let Mstyle={
        color: props.mode==='dark'?'white':"black",
        backgroundColor: props.mode==='dark'?'dark':"white",
        border: '1px solid',
        borderColor : props.mode==='dark'?'white':"black"

    }
    return (
        <div className="accordion mb-10" id="accordionExample" >
            <div className="card" style={Mstyle}>
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            this is first accordion line 
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body" style={Mstyle}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                         Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, 
                          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div className="card" style={Mstyle}>
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        this is second accordion line 
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body" style={Mstyle}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                         laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin 
                         coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                           Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                            haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div className="card" style={Mstyle}>
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        this is third accordion line 
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body" style={Mstyle}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                         3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum 
                         eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla 
                         assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                           farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus 
                           labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    )
}
