export const Modal = ({ state, setState, children }) => {
   return (
      <div className={state ? "modal active" : "modal"} onClick={() => { setState(false) }}>
         <div className={state ? "modal__wrapper active" : "modal__wrapper"} onClick={e => e.stopPropagation()} >
            {children}
            <span className="modal__btn-out" onClick={() => setState(false)}>
               <i className="fa fa-times" aria-hidden="true"></i>
            </span>
         </div>
      </div >
   )
}