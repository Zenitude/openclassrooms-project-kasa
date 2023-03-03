import React from 'react'
import { ReactComponent as K } from './K.svg';
import { ReactComponent as V } from './House.svg';
import { ReactComponent as S } from './S.svg';
import { ReactComponent as A } from './A.svg';



export default function Logo({fill}) {
  return (
    <div>
      <K className={fill}/>
      <V className={fill}/>
      <S className={fill}/>
      <A className={fill}/>
    </div>
  )
}
