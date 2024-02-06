// import {Component} from "react";
// import abyss from '../../resources/img/abyss.jpg';
// import MarvelService from "../../services/MarvelService";
//
// class CharItem extends Component {
//     state = {
//         char: {
//             name: '',
//             thumbnail: '',
//             id: ''
//         },
//         loading: true,
//         error: false,
//     }
//
//     marvelService = new MarvelService();
//
//     getChar = () => {
//         const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
//         let characterPromise = this.marvelService.getCharacter(id);
//         characterPromise.then(
//             (data) => {
//
//                 let newName = data.name
//                 let newThumbnail = data.thumbnail
//
//                 let newChar = {
//                     name: newName,
//                     thumbnail: newThumbnail,
//                     id: data.id,
//                 }
//
//                 this.setState({
//                     char: newChar,
//                     loading: false
//                 })
//
//             }
//         )
//             .catch(this.onError);
//     }
//     componentDidMount() {
//         this.getChar()
//     }
//
//
//     render(){
//         console.log('this.state.char.id', this.state.char.id)
//         return <li className="char__item"
//                    key={this.state.char.id}
//                    onClick={() => this.props.onCharSelected(this.state.char.id)}
//         >
//             <img src={this.state.char.thumbnail} alt={this.state.char.name}/>
//             <div className="char__name">{this.state.char.name}</div>
//         </li>
//
//     }
// }
//
// export default CharItem;