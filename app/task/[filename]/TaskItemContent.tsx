'use client';

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from './page.module.css';
import { IResult } from "@/types";
import { Task } from "@/app/models/Task";
import ResultsOutput from "@/components/ResultsOutput";
import BreadCrumbs from "@/components/BreadCrumbs";
import { SlideRight, SlideUp } from "@/components/AnimationBox";
import Labels from "@/components/Labels";
import { Editor } from "@monaco-editor/react";
import { editor as monacoEditor } from "monaco-editor";
import { FcIdea } from "react-icons/fc";
import NavArrows from "@/components/NavArrows";
import ShowSolution from "@/components/ShowSolution";

export default function TaskItemContent({ filename }: { filename: string }) {
  const editorRef = useRef<monacoEditor.IStandaloneCodeEditor | null>(null);
  const [results, setResults] = useState<IResult[]>([]);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const tasks = Task.getTasks();
  const task = Task.getTask(filename);
  const router = useRouter();

  if (!task) {
    router.replace('/404');
    return null;
  }

  const next = tasks[task.index] ? tasks[task.index].slug : null;
  const prev = tasks[task.index - 2] ? tasks[task.index - 2].slug : null;

  function handleEditorDidMount(editor: monacoEditor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    window.addEventListener("resize", () => editor.layout());
  }

  const check = () => {
    if (!editorRef.current) return;
    const editor = editorRef.current;
    const result = task?.test(editor.getValue());
    if (result) {
      setResults(result);
    }
  };

  const onClose = () => {
    setResults([]);
    setShowSolution(false);
  };

  const breadcrumbs = [{ name: 'Tasks', path: '/task' }, { name: task.title, path: '/task/' + task.slug }];

  return (
    <>
      <header className={`h-[80px] w-full overflow-hidden dark-accent rounded-lg relative text-white`}>

      </header>
      <div>
        <BreadCrumbs path={breadcrumbs} />
        <div className="container mx-auto flex flex-wrap items-start justify-between relative z-10">
          {/* Description Block */}
          <div className="order-1 md:order-3 w-full lg:w-1/2 overflow-hidden pl-0 md:pl-5 mt-5 md:mt-0">
            <SlideRight>
              <div className="flex flex-wrap md:flex-nowrap justify-between">
                <div className="pr-5 w-full lg:w-auto">
                  <h1 className="text-5xl sm:text-6xl mb-2" property="og:title" itemProp="name">{task.title}</h1>
                  <Labels list={task.tags} />
                  <p className="text-md mt-10 text-justify">{task.description}</p>
                </div>
                <div className="w-full md:w-[250px] shrink-0 mt-5 flex lg:mt-0 justify-center">
                  <Image src={`/${task.image}`} alt={task.title} width={250} height={250} className="rounded-lg" />
                </div>
              </div>
            </SlideRight>
            <SlideUp>
              {task.examples.length > 0 && <div className="bg-white relative mt-8 justify-start rounded-lg text-black py-3 px-2">
                <h5 className="text-gray-600">Examples:</h5>
                <div>
                  <ul>
                    {task.examples.map((example, i) => <li key={i}>
                      <code className="text-sm">{example}</code>
                    </li>)}
                  </ul>
                </div>
              </div>}

              <div className="mt-5 flex justify-between align-middle">
                <button className="flex rounded py-2 px-4 bg-white" onClick={() => setShowSolution(true)}>
                  <FcIdea size={18} className="mr-2" /> Show Solution
                </button>
                <NavArrows prev={prev} next={next} />
              </div>
            </SlideUp>
          </div>

          {/* Code Editor Block */}
          <div className="order-2 w-full lg:w-1/2">
            <SlideUp>
              <div className={`${styles.codeEditor}`}>
                <p className="mb-2">Write your solution</p>
                <Editor
                  height="50vh"
                  defaultLanguage="javascript"
                  defaultValue={task.code}
                  options={{
                    minimap: { enabled: false },
                    padding: { top: 0, bottom: 0 },
                    scrollBeyondLastLine: false,
                    lineHeight: 24,
                    fontSize: 14,
                    quickSuggestions: false,
                    suggestOnTriggerCharacters: false,
                    acceptSuggestionOnEnter: "off",
                    wordBasedSuggestions: 'off',
                    parameterHints: { enabled: false },
                    tabCompletion: "off",
                    smoothScrolling: true,
                    accessibilitySupport: "off",
                    useShadowDOM: false,
                  }}
                  onMount={handleEditorDidMount}
                />
                <button onClick={check} className="mt-2 accent accent-hover rounded py-2 px-8 text-white">Run</button>
              </div>
            </SlideUp>
          </div>
        </div>

        {showSolution && <ShowSolution solution={task.solution} onClose={onClose} />}
        {results.length > 0 && <ResultsOutput results={results} onClose={onClose} />}
      </div>
    </>
  );
}
