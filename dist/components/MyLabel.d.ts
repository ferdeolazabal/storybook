import './myLabel.css';
export interface IMyLabelProps {
    /**
    * Mensaje que se muestra en la etiqueta
    */
    label: string;
    /**
    * Tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
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
export declare const MyLabel: ({ label, size, AllCaps, color, fontColor, backgroundColor }: IMyLabelProps) => JSX.Element;
