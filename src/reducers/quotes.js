export default (state = [], action) => {
<<<<<<< HEAD
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
     return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: 
      return state;
  }
}
=======
  switch (action.type) {
    case 'ADD_QUOTE'
      return {quote: state.quote}
    default:
      return state
  }
  
  
}
>>>>>>> ceb6e8542a986cc7d3ee3c893165cac5c4df5d73
