export class Article {
    public publishedAt: Date;

    constructor(
        public title: string,
        public description: string, 
        public votes?: number
    ) {
        this.votes = votes || 0;
        this.publishedAt = new Date();
    }

    public voteUp() {
        this.votes = this.votes + 1;
    }

    public voteDown() {
        this.votes = this.votes - 1;
    }
}
