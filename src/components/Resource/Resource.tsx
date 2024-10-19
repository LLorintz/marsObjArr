
export type resourceProps={
    name:string,
    amount:number,
    production:number,
    onchange?:(increment:number)=>void
    onchangeProductivity?:(increment:number)=>void
}

const Resource = (props:resourceProps) => {
return (
<div className="Resource">
    <p>{props.name}: <span>{props.amount}</span></p>
    <div className="buttonContainer">
    <button type="button" onClick={() => props.onchange && props.onchange(-1)}>-</button>
        <button type="button" onClick={() => props.onchange && props.onchange(1)}>+</button>

    </div>
    <p>termelés: <span>{props.production}</span></p>
    <div className="buttonContainer">
    <button type="button" onClick={() => props.onchangeProductivity && props.onchangeProductivity(-1)}>-</button>
    <button type="button" onClick={() => props.onchangeProductivity && props.onchangeProductivity(1)}>+</button>
    </div>
    
</div>
  )
}

export default Resource