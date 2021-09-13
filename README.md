# Business App


This app pretends to simulate a CRUD experience creating business and people bound to the businesses in the registry.


It uses the following main tools to showcase the experience:

- React
- Redux
- Redux Toolkit
- Redux Saga
- React i18next
- React Router

## Further work:

I've noticed that the API does not allow me to update some fields.

Last week, while I was fiddling with the API, I've noticed that `join_date` wasn't workable in terms of editing, so I've decided to drop that out.

Just recently before finalizing my work, I've also noticed that Person editing is not flexible in terms of the role, so I've decided to keep that work since I didn't bother to check on which fields were editable, even if the Redux Saga flow is there to edit.