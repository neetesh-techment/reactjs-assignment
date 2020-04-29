import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      algoliaData: []
    }
  }

  componentDidMount(){
    this.callApi(this.state.pageNumber);
    this.initializeInterval(this.state.pageNumber);
  }

  initializeInterval(pageNumber){
    setInterval(() => {
      this.setState({
        pageNumber: pageNumber + 1,
      }, () => {
        this.callApi(pageNumber);
      });
    }, 10000);
  }

  // Fetch the data from API
  callApi(pageNumber){
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=" + pageNumber)
    .then(response => response.json())
    .then((response) => {
      let oldAlgoliaData = [...this.state.algoliaData];
      for (var j = 0; j < response.hits.length; j++) {
        oldAlgoliaData.push(response.hits[j]);
      }
      this.setState({
        algoliaData: oldAlgoliaData,
      });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.algoliaData.length > 0 ?
            this.state.algoliaData.map((item, index) => {
              return (
                <div key={index} >
                  <p>Title : {item.title} </p>
                  <p>Created At : {item.created_at} </p>
                  <p>Author : {item.author} </p>
                  <p>URL : {item.url} </p>
                  <hr />
                </div>
              );
            })
          :
          ""
        }
      </div>
    )
  }
}

export default Home;
