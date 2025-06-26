const getVoteCount = ({ upvotes = 0, downvotes = 0 }) => upvotes - downvotes;

console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13

console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31

console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0

console.log(getVoteCount({})); // 0