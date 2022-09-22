import "isomorphic-unfetch";
import nock from "nock";
import dotenv from "dotenv";
import httpAdapter from "axios/lib/adapters/http";
import axios from "axios";

dotenv.config({ path: ".env.test" });

axios.defaults.adapter = httpAdapter;

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});
