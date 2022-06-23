import { CheckCircle } from 'phosphor-react'
import { Lock } from 'phosphor-react'

interface LessonProps{
    title: string;
    slug: string;
    avaliableAt: Date;
    type: 'live' | 'class'
}



export function Lesson (props: LessonProps){
    const isLessonAvailable = true;


    return(
        <a href="#">
            <span className="text-gray-300">
                {props.avaliableAt.toString()}
            </span>
            
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (

                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                        </span>

                    ) : (
                        
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20} />
                        Em breve
                        </span>

                    )}


                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>

                </header>

                <strong className="text-gray-200 mt-5 block ">
                    {props.title}
                </strong>
            </div>

        </a> 
    )
}