import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { task_buddy_custom_instances } from "../../../../axios/axios_task_buddy";
import { toast } from "react-toastify";

// ==================== Custom Hook => Fetch Tasks =================
export const useTaskFetch = () => {
	const result = useQuery({
		queryKey: ["tasks"],
		queryFn: () => task_buddy_custom_instances.get(),
	});

	return result;
};

// ==================== Custom Hook => Create Tasks =================
// export const useTaskCreate = (setTaskName) => {
export const useTaskCreate = () => {
	const queryClient = useQueryClient();

	const { mutate: createTask, isLoading } = useMutation({
		mutationFn: (taskName) =>
			task_buddy_custom_instances.post("/", { title: taskName }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
			toast.success("Task has been created Successfully!!");
			// // setTaskName("");
			// setTaskName("");
		},
		onError: (error) => {
			console.log(error.response.data.msg);
			toast.error(error.response.data.msg);
		},
	});

	return { createTask, isLoading };
};

// ==================== Custom Hook => Update Tasks =================
export const useTaskUpdate = (item) => {
	const queryClient = useQueryClient();

	const { mutate: updateTask, isPending } = useMutation({
		mutationFn: async (id) =>
			await task_buddy_custom_instances.patch(`/${id}`, {
				isDone: !item.isDone,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
			toast.success("Task has been updated!!");
		},
		onError: (err) => {
			console.log(err);
		},
	});

	return { updateTask, isPending };
};

// ==================== Custom Hook => Delete Tasks =================
export const useTaskDelete = () => {
	const queryClient = useQueryClient();

	const { mutate: deleteTask } = useMutation({
		mutationFn: async (id) =>
			await task_buddy_custom_instances.delete(`/${id}`),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
			toast.warning("Task has been Deleted!!");
		},
		onError: (err) => {
			console.log(err);
		},
	});

	return { deleteTask };
};
