import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { data } from "../service/UserService";
import { SearchBar } from "./SearchUsers";
import {LoadingAnimation} from "./LoadingAnimation"

class App extends React.Component {
  constructor(props) {
    super(props);

    // const savedLayout = localStorage.getItem(`layout`)
    // const layout = savedLayout || 'list' ---> drugi nacin zapisivanja

    const savedLayout = localStorage.getItem(`layout`);
    const layout = savedLayout ? savedLayout : "list";

    this.state = {
      users: [],
      layout,
      female: true,
      inputValue: "",
      isLoading: true
    };
  }

  loadData() {
    data().then(users =>
      this.setState({
        users: users
      })
    );
  }

  componentDidMount() {
      this.setState({isLoading:true})
      this.loadData();
  }

  onLayoutChangeClick = () => {
    const layout = this.state.layout === "list" ? "grid" : "list";
    this.setState({ layout });
    localStorage.setItem("layout", layout);
  };

  refreshPage = () => {
   this.state={users:[]}
    this.loadData();
   

  };

 onInputChange = (event) => {
    this.setState({inputValue: event.target.value})
 }
//   onKeyPress = event => {
//     const input = event.target.value;
//     this.setState({ value: input });
//     const search = this.state.value;
//     this.state.users.filter(user => {
//       if (
//         search.includes(`${user.name.first}`) ||
//         search.includes(`${user.name.last}`)
//       ) {
//       }
//     });
//   };

  render() {
      const {users,inputValue} = this.state;
      const usersFiltered=users.filter(user=>(
        user.name.first.toLowerCase().includes(inputValue.toLowerCase())
      ));

      if (this.state.users.length===0){
          console.log('test')
        return (
            <React.Fragment>
              <Header
                layout={this.state.layout}
                onLayoutChangeClick={this.onLayoutChangeClick}
                refreshPage={this.refreshPage}
              />
              <LoadingAnimation />
              <Footer />
            </React.Fragment>
          );
      }else{
          return (
            <React.Fragment>
              <Header
                layout={this.state.layout}
                onLayoutChangeClick={this.onLayoutChangeClick}
                refreshPage={this.refreshPage}
              />
              <SearchBar value={this.state.inputValue} onInputChange={this.onInputChange}/>
              <Main allUsers={usersFiltered} layout={this.state.layout} />
              <Footer />
            </React.Fragment>
          );
      }
  }
}

export { App };
