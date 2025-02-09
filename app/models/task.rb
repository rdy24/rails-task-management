class Task < ApplicationRecord
  enum :status, { pending: "Pending", in_progress: "In Progress", completed: "Completed" }
end
