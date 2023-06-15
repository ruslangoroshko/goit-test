import axios from "axios";

class API {
  Axios = axios.create({
    baseURL: "https://api.github.com",
  });

  async getGitRepositories(search, page) {
    const response = await this.Axios.get("/search/repositories", {
      params: {
        page,
        q: search || "react",
        per_page: 20,
      },
    });

    return response.data;
  }
}

export default new API();
