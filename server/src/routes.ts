import express from 'express'
import { SubmitFeedbackUseCase } from './useCases/submitFeedbacksUseCase';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbackRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body
    
    const primstaFeedbackRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(primstaFeedbackRepository, nodemailerMailAdapter);

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send();
})