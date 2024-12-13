'use client';

import { use, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './page.module.css';
import { IResult } from "@/types";
import Link from "next/link";
import { Editor } from "@monaco-editor/react";
import ShowSolution from "@/components/ShowSolution";
import { editor as monacoEditor } from "monaco-editor";
import { Task } from "@/app/models/Task";
import ResultsOutput from "@/components/ResultsOutput";
import BreadCrumbs from "@/components/BreadCrumbs";
import Header from "@/components/Header";
import { SlideRight, SlideUp } from "@/components/AnimationBox";
import HeroBgDecor from "@/components/Hero/HeroBgDecor";
import Labels from "@/components/Labels";
import Head from "next/head";

export default function TaskPage({ params }: { params: Promise<{ filename: string }> }) {
  const { filename } = use(params);
  const editorRef = useRef<monacoEditor.IStandaloneCodeEditor | null>(null);
  const [results, setResults] = useState<IResult[]>([]);
  const tasks = Task.getTasks();
  const task = Task.getTask(filename);
  const router = useRouter();

  if (!task) {
    router.replace('/404');
    return null;
  }

  const next = tasks[task.index] ? tasks[task.index].slug : null;

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
  }

  const onClose = () => (setResults([]));

  const breadcrumbs = [{ name: 'Tasks', path: '/task' }, { name: task.title, path: '/task/' + task.slug }];

  return (<>
    <Head>
      <title>JS-Lab | {task.title}</title>
      <meta name="description" content={task.description} />
      <link rel="canonical" href={`https://js-laboratory.vercel.app/task/${task.slug}`} />
      {/* OpenGraph metadata */}
      <meta property="og:title" content={`JS-Lab | ${task.title}`} />
      <meta property="og:description" content={task.description} />
      <meta property="og:image" content="https://js-laboratory.vercel.app/og-image.jpg" />
      <meta property="og:url" content={`https://js-laboratory.vercel.app/${task.slug}`} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `JS-Lab | ${task.title}`,
          "description": task.description,
          "url": `https://js-laboratory.vercel.app/task/${task.slug}`
        })}
      </script>
    </Head>
    <div>
      <header className="relative overflow-hidden text-white h-[500px] dark-accent rounded-lg z-10">
        <Header />
        <div className='relative flex items-center justify-center'>
          <div className="container mx-auto px-6 flex flex-wrap items-center justify-between relative z-10">
            <div className="w-full lg:w-1/2">
              <SlideRight>
                <div className="container px-0 lg:px-14 mx-auto py-3">
                  <h1 className="text-5xl sm:text-6xl mb-2" property="og:title" itemProp="name">{task.title}</h1>
                  <Labels list={task.tags} />
                </div>
              </SlideRight>
            </div>
            <div className="w-full lg:w-1/2">
              <SlideUp>
                {task.examples.length > 0 && <div className="bg-white relative mt-8 justify-start rounded-lg text-black py-3 px-2">
                  <h5 className="text-gray-600">Examples:</h5>
                  <div className="">
                    <ul>
                      {task.examples.map((example, i) => <li key={i}>
                        <code className="text-sm">{example}</code>
                      </li>)}
                    </ul>
                  </div>
                </div>}
              </SlideUp>
            </div>
          </div>
          <HeroBgDecor />
        </div>
      </header>
      <BreadCrumbs path={breadcrumbs} />
      <p className="text-md mt-10">{task.description}</p>
      <div className="container mx-auto flex flex-wrap items-start justify-between relative z-10">

        <div className={`${styles.codeEditor} rounded-lg w-full lg:w-1/2`}>
          <p className="mb-2">Write your solution</p>
          <Editor
            height="40vh"
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
            onMount={handleEditorDidMount} />
        </div>
        <ShowSolution task={task} />
      </div>
      <div className="flex justify-between mt-2 mb-3">
        <button onClick={check} className="accent accent-hover rounded py-2 px-8 text-white">Run</button>
        <button disabled={!next} className="py-2 px-8 rounded bg-slate-50 hover:bg-slate-200 border-black"><Link href={'/task/' + next} property="og:url" itemProp="url">Next</Link></button>
      </div>

      {results.length > 0 && <ResultsOutput results={results} onClose={onClose} />
      }
    </div>
  </>
  );
}
