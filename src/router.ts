import { Router } from 'express';
import { WelcomeRouteController } from './controllers/WelcomeRouteController';

const router = Router()

const welcomeRouteController = new WelcomeRouteController()

router.post("/api/v1/welcome", welcomeRouteController.handle)

export { router }