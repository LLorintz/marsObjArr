import { FormEvent, useState } from "react"
import styles from './PlayerName.module.css'

const PlayerName = () => {
const [isEdit, setIsEdit] = useState<boolean>(true);
const [playerName, setPlayerName] = useState('Player Name')

const handleChangeEdit = ()=>{
    setIsEdit(!isEdit)
}

const handlePlayerNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPlayerName(e.target.value)
}

const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    handleChangeEdit()
} 

  return (
    <>
    { isEdit ? 
    (
    <div onClick={handleChangeEdit} className={styles.PlayerName}>
            <h1>{playerName}</h1>
    </div>)
    :
    (
    <form onSubmit={handleSubmit} className={styles.PlayerInput}>
        <input type="text" value={playerName} onChange={handlePlayerNameChange}/>
        <button type="submit">Save Name</button>
    </form>
    )  
    }
    </>
  )
}

export default PlayerName