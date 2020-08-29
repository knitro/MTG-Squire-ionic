import React from 'react';
import './SearchHistory.css';
import { getSearchHistory, SearchHistoryState } from '../../../states/SearchHistoryState';
import SearchHistoryComponent from '../DisplayComponent/SearchHistoryComponent';

export interface SearchHistoryPageState {
  currentSearchHistoryState: SearchHistoryState[]
};


/**
 * Deals with Async and Updating Components in relation to the Search History.
 */
class SearchHistory extends React.Component<{}, SearchHistoryPageState> {

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.state = {
      currentSearchHistoryState: [],
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {
    this.setState({currentSearchHistoryState: await getSearchHistory()});
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
    return (
      <SearchHistoryComponent state={this.state}/>
    );
  }

}

export default SearchHistory;