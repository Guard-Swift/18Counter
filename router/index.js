import { Router } from "express";

import homeRouter from './homeRouter.js';

export default () => {

  const router = Router();

  router.use('/', homeRouter());

  return router;
}


