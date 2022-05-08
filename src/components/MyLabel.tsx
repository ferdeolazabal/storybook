import './myLabel.css';

interface IMyLabelProps {
    /**
    * Mensaje que se muestra en la etiqueta
    */
    label: string;
    /**
    * Tamaño de la etiqueta
    */
    size : 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  Capitalizar la etiqueta
     */
    AllCaps?: boolean;
    /**
     * Color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personaizado e la fuente
     */
    fontColor?: string;
    /**
     * Color personaizado e la fuente
     */
    backgroundColor?: string;
}

export const MyLabel = ( {
    label = 'No Label',
    size  = 'normal',
    AllCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: IMyLabelProps ) => {
    return (
        <span 
            className={ `label ${ size } text-${ color }` }
            style={{ color: fontColor, backgroundColor }}>
            { AllCaps ? label.toUpperCase() : label }
        </span>
    );
};
