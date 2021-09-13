import { Router } from 'express';

import EmployeeModel from '../models/employee.model';

const employeesRouter = Router();

employeesRouter.post('/', async (request, response) => {
  const { first_name, last_name, participation, color } = request.body;

  if (!first_name || !last_name || !participation || !color) {
    return response
      .json({ error: true, message: 'Campos obrigatórios' })
      .status(400);
  }

  const employeeModel = new EmployeeModel({
    first_name,
    last_name,
    participation,
    color,
  });

  await employeeModel.save();

  return response.json(employeeModel);
});

employeesRouter.get('/', async (_, response) => {
  const employees = await EmployeeModel.find().lean();

  return response.json(employees);
});

export default employeesRouter;
