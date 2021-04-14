const resolvers = {
    Query :  {

        //returns an array of Tracks that will be popped
        tracksForHome : (_, __, {dataSources}) => {
            //if we dont use the param, put "_".
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track : {
        author : ({authorId},_,{dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)
        }
    }
};

module.exports = resolvers;