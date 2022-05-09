import { SubmitFeedbackUseCase } from "./submitFeedbacksUseCase"

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendEmailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64;screenshot.jpg'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64;screenshot.jpg'
    })).rejects.toThrow();
  });
  
  it('should not be able to submit a feedback without comment', async () => {
    
    await expect(submitFeedback.execute({
      type: 'type',
      comment: '',
      screenshot: 'data:image/png;base64;screenshot.jpg'
    })).rejects.toThrow();
  });
  
  it('should not be able to submit a feedback with screenshot with the wrong type', async () => {
    
    await expect(submitFeedback.execute({
      type: 'type',
      comment: 'example comment',
      screenshot: 'data:image/jpg;base64;screenshot.jpg'
    })).rejects.toThrow();
  });
})