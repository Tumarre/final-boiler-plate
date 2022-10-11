import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    // addTask
    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    },

    //itsDone
    async isDone(id, boolean) {
      const { data, error } = await supabase
        .from("tasks")
        .update({
          is_complete: boolean,
        })
        .match({ id: id });
    },

    // delete task
    async deleteTaskss(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
    },

    //susuususus edit
    async editTask(title, description, id) {
      try {
        console.log("lmao");
        const { data, error } = await supabase
          .from("tasks")
          .update({
            title: title,
            description: description,
          })
          .match({ id: id });

        if (error) throw error;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
