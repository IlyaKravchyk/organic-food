import style from "./Modal.module.scss"

export const Modal = ({ state, setState, children }) => {
   return (
      <div className={state ? `${style.modal} ${style.active}` : style.modal} onClick={() => { setState(false) }}>
         <div className={state ? `${style.wrapper} ${style.active}` : style.wrapper} onClick={e => e.stopPropagation()} >
            {children}
            <span className={style.btn} onClick={() => setState(false)}>
               <i className="fa fa-times" aria-hidden="true"></i>
            </span>
         </div>
      </div >
   )
}