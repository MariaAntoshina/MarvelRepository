import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import useMarvelService from "../../services/MarvelService";
import './charInfo.scss';
import setContent from "../../utils/setContent";
import {IMAGE_NOT_AVAILABLE} from "../constants/messages";
import CharSearchForm from "../charSearchForm/CharSearchForm";

const CharInfo = (props) => {
    const [char, setChar] = useState(null);
    const {getCharacter, clearError, process,setProcess} = useMarvelService();

   useEffect(() => {
       updateChar()
   }, [props.charId])

   const updateChar = () => {
        const {charId} = props;
        if(!charId){
            return;
        }


            clearError();
            getCharacter (charId)
                .then (onCharLoaded)
                .then (() => setProcess('confirmed'))


    }

   const onCharLoaded = (char) => {
       setChar(char);
    }




    return (
        <div>
            <div className="char__info">
                {setContent(process, View, char)}
            </div>
            <CharSearchForm/>
        </div>

    )
}

const View  = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics } = data;
    const className= data.thumbnail.includes(IMAGE_NOT_AVAILABLE) ?
        "not_found" : "";
    return (
        <>
        <div className="char__basics">
            <img src={thumbnail} alt={name} className = {className}/>
            <div>
                <div className="char__info-name">{name}</div>
                <div className="char__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    <div className="char__descr">
        {description}
    </div>
    <div className="char__comics">Comics:</div>
    <ul className="char__comics-list">
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {
            comics.map((item,i) => {
                if (i>9) return;
                return ( <li key ={i} className="char__comics-item">
                    {item.name}
                </li>)
            })
        }


    </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number,
}

export default CharInfo;